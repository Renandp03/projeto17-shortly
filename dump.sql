--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shorts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shorts (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortUrl" text,
    url text,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: shorts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shorts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shorts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shorts_id_seq OWNED BY public.shorts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "linksCount" integer DEFAULT 0 NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shorts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorts ALTER COLUMN id SET DEFAULT nextval('public.shorts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, '1c3ea60c-e09c-4df3-9034-248dd009000f', '2023-02-28 20:23:55.246073');
INSERT INTO public.sessions VALUES (3, 3, 'b2443659-7f5b-4cab-b97c-3f9f0c77d10b', '2023-02-28 21:49:57.982076');


--
-- Data for Name: shorts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.shorts VALUES (1, 1, 'NPtjBmsHHz', 'https://www.youtube.com/watch?v=DH_j4qs-92k', 0, '2023-02-28 20:24:34.212958');
INSERT INTO public.shorts VALUES (2, 1, 'cWyFmlevzl', 'https://www.youtube.com/watch?v=DH_j4qs-92k', 1, '2023-02-28 20:38:17.536742');
INSERT INTO public.shorts VALUES (3, 3, 'dizFNG2i8x', 'https://www.youtube.com/watch?v=DH_j4qs-92k', 0, '2023-02-28 21:48:21.538077');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Renan', 'renan@gmail.com', '$2b$10$JElloiinDN4OVKN9v4d.9OmcHfCMFcE75rP14n0ksAqn7EBahI33K', 1, 1, '2023-02-28 20:23:50.308887');
INSERT INTO public.users VALUES (2, 'Matheus', 'matheus@gmail.com', '$2b$10$eYDAlbrQHOsXXSi4DuadOO0va6Xnb1Y9hnwp/C1zAQwE5qSG1BwkS', 0, 0, '2023-02-28 21:04:18.105218');
INSERT INTO public.users VALUES (4, 'Letécia', 'letty@gmail.com', '$2b$10$rTlI/gt68npYhhVcvygECuzdHYveNtURDr9T4EP7fjmQP2QTFbdbW', 0, 0, '2023-02-28 21:04:51.456217');
INSERT INTO public.users VALUES (5, 'Vitor', 'vitor@gmail.com', '$2b$10$roE3CUqmK0AhxEB55inOYu63YO4mJ1eN31Gd.4JF4c9YG3Z4AO6e6', 0, 0, '2023-02-28 21:05:16.496042');
INSERT INTO public.users VALUES (6, 'Claudio', 'claudio@gmail.com', '$2b$10$Z0h8sQ4XzSf2UGHoMJyfxOs3ZeCJ9LmLkunUUDUwktjBONDPPqxbq', 0, 0, '2023-02-28 21:05:39.299528');
INSERT INTO public.users VALUES (7, 'Kaio', 'kaio@gmail.com', '$2b$10$.4fq/frIR0IYa09DNVbXJORPoTEi6ig5p74wgTXYtq23EyjCMuooe', 0, 0, '2023-02-28 21:05:54.630664');
INSERT INTO public.users VALUES (8, 'Joaquin', 'joaquin@gmail.com', '$2b$10$47K97HWd7BbJQOO3jwcb2.pmzbQ0qD1KF4OTVP7JGCCkCYEhd6En.', 0, 0, '2023-02-28 21:06:17.058336');
INSERT INTO public.users VALUES (9, 'Mario', 'mario@gmail.com', '$2b$10$v.yR4WvebTg29LR6f19KIOd0fNcciBwnz/JVzuDCzYrfKy8rMkUR.', 0, 0, '2023-02-28 21:13:51.427242');
INSERT INTO public.users VALUES (10, 'Luigi', 'luigi@gmail.com', '$2b$10$plKe43jtY.sIXfvYdenWIeR3ZJhkdCdefuGWCbGfqyyxcP64C2n9y', 0, 0, '2023-02-28 21:14:18.607497');
INSERT INTO public.users VALUES (11, 'Pedro', 'pedro@gmail.com', '$2b$10$t7XTsvhOYG6nO5Pt29GXTeiE2AeCLojybHK71YqhCxgMLgK/AKaMi', 0, 0, '2023-02-28 21:14:35.313772');
INSERT INTO public.users VALUES (3, 'Ana', 'ana@gmail.com', '$2b$10$AtRmyUIOMqyub/yrM0dxHe.53rqN5SiHTjCDJQkHQoQXrrFUo6vKe', 1, 0, '2023-02-28 21:04:35.249397');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: shorts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.shorts_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: shorts shorts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorts
    ADD CONSTRAINT shorts_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: shorts shorts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorts
    ADD CONSTRAINT "shorts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

