import prisma from "../db/client.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const controller = {};

controller.create = async function (req, res) {
  try {
    const { senha } = req.body;

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(senha, salt);

    const emailCheck = await prisma.usuario.findUnique({
      where: { email: req.body.email },
    });
    if (emailCheck) {
      res.status(409).send({ error: "Email já cadastrado" });
      return;
    }

    const cpfCheck = await prisma.usuario.findUnique({
      where: { cpf: req.body.cpf },
    });
    if (cpfCheck) {
      res.status(409).send({ error: "CPF já cadastrado" });
      return;
    }

    await prisma.usuario.create({
      data: {
        nome: req.body.nome,
        email: req.body.email,
        senha: hashedPassword,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
      },
    });

    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.login = async function (req, res) {
  try {
    const { email, senha } = req.body;

    const user = await prisma.usuario.findUnique({
      where: { email: email },
    });

    if (!user) {
      res.status(401).send({ error: "Usuário não encontrado" });
      return;
    }

    const passwordMatch = bcrypt.compareSync(senha, user.senha);

    if (!passwordMatch) {
      res.status(401).send({ error: "Senha incorreta" });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);

    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.retrieveAll = async function (req, res) {
  const include = {};

  try {
    const result = await prisma.usuario.findMany({
      include,
      orderBy: [{ nome: "asc" }],
    });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.retrieveOne = async function (req, res) {
  try {
    const result = await prisma.usuario.findUnique({
      where: { id: req.params.id },
    });
    if (result) res.send(result);
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.update = async function (req, res) {
  try {
    const result = await prisma.usuario.update({
      where: { id: req.params.id },
      data: req.body,
    });

    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.delete = async function (req, res) {
  try {
    const result = await prisma.usuario.delete({
      where: { id: req.params.id },
    });

    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default controller;
