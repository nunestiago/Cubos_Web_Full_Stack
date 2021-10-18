CREATE TABLE public.usuarios (
	id int NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	nome varchar NOT NULL,
	email varchar NOT NULL,
	senha varchar NOT NULL,
  cpf varchar NULL,
  telefone varchar NULL,
	CONSTRAINT users_pk PRIMARY KEY (id),
	CONSTRAINT users_un UNIQUE (email)
);

CREATE TABLE clientes (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	nome varchar NOT NULL,
	email varchar NOT NULL,
	cpf varchar NOT NULL,
	telefone varchar NOT NULL,
	cep varchar NULL,
	logradouro varchar NULL,
	bairro varchar NULL,
	cidade varchar NULL,
	complemento varchar NULL,
	ponto_referencia varchar NULL,
	usuario_id int4 NOT NULL,
	em_dia bool NOT NULL DEFAULT false,
	CONSTRAINT clientes_pk PRIMARY KEY (id)
  CONSTRAINT clientes_fk FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE ON UPDATE CASCADE;
);

CREATE TABLE cobrancas (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	cliente_id int4 NOT NULL,
	usuario_id int4 NOT NULL,
	vencimento date NOT NULL,
	pago_em date NULL,
	created_at date NULL DEFAULT now(),
	status bool NOT NULL DEFAULT false,
	valor int4 NOT NULL,
	CONSTRAINT cobrancas_pk PRIMARY KEY (id)
  CONSTRAINT cobrancas_fk FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE ON UPDATE CASCADE;
  CONSTRAINT cobrancas_fk_1 FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE ON UPDATE CASCADE;
);




select
	c.id,
	case
		when count(c2.pago_em) < count(c2.vencimento) then 1
		else 0
	end as cliente_inadimplente,
	case
		when count(c2.pago_em) < count(c2.vencimento) then 0
		else 1
	end as cliente_em_dia,
	count(c2.pago_em) as cobranca_paga
from
		clientes c
left join cobrancas c2 on
		c2.cliente_id = c.id
	and c2.usuario_id = 20
where
		c.usuario_id = 20
group by
		(c.id);

select
	count(
	case
		when vencimento > now()
		and pago_em is null then 1
	end) as previstas,
		count(
	case
		when vencimento < now()
		and pago_em is null then 1
	end) as vencida
from
	cobrancas c
where
	c.usuario_id = 20

select
	c2.id ,
	c2.nome ,
	c2.email ,
	c2.cpf ,
	c2.telefone ,
	c2.cep ,
	c2.logradouro ,
	c2.bairro ,
	c2.cidade ,
	c2.complemento ,
	c2.ponto_referencia,
	sum(valor) as feitas
from
	cobrancas c
left join clientes c2 on
	c2.id = c.cliente_id
where
	c.usuario_id = 20
group by
	c.cliente_id,
	c2.id

    const getClients = await knex('cobrancas')
      .select(
        'clientes.id',
        'clientes.nome',
        'clientes.email',
        'clientes.cpf',
        'clientes.telefone',
        'clientes.cep',
        'clientes.logradouro',
        'clientes.bairro',
        'clientes.cidade',
        'clientes.complemento',
        'clientes.ponto_referencia',
      )
      .sum({ feitas: 'valor' })
      .leftJoin('clientes', function () {
        this.on('cobrancas.cliente_id', 'clientes.id').andOn(
          'cobrancas.usuario_id',
          id,
        );
      })
      .where('cobrancas.usuario_id', id)
      .groupBy('cobrancas.cliente_id', 'clientes.id');

    const getReceived = await knex('cobrancas')
      .select(
        'cobrancas.cliente_id',
        knex.raw(`
        case
          when cobrancas.status = true then sum(valor)
        end as recebidas`),
      )
      .where('cobrancas.usuario_id', id)
      .andWhere('cobrancas.status', true)
      .groupBy('cobrancas.cliente_id', 'cobrancas.status');
