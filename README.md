# Overview
This project consists of developing and implementing a computer program that can simulate the
navigation of a logical agent in a given environment. The project will help you understand logical
representation and logical inference.

# Wumpus World Description
The Wumpus world is a cave consisting of rooms connected by passageways. Lurking somewhere in
the cave is the terrible Wumpus, a beast that eats anyone who enters its room. The Wumpus can be
shot by an agent, but the agent has only one arrow. Some rooms contain bottomless pits that will trap
anyone who wanders into these rooms. The only mitigating feature of this bleak environment is the
possibility of finding a heap of gold. The full PEAS description of the Wumpus world is given in
Section 7.2 of Russell and Norvig’s AI textbook.
For this project, you will use the exact same specifications as the one given in the book, with one
exception: instead of a small grid, you’ll be using a larger 10 X 10 grid.

# Project Requirements
- AI agent must be able to navigate the Wumpus world using either Propositional or
First Order Logic (or both).
- Program must be able to load different environments where the position and numbers
of pit, gold, Wumpus can vary. Should have provisions for randomly generated
environments and pre-specified environments (by reading from a file that may give)
- The program must have the following components
o A proper representation of the environment and knowledge base
o Correct use of logic (Propositional or FOL)
o Use of logical inference (resolution, forward and backward chaining)
o May use probabilistic reasoning as well
o A loop detection and avoidance mechanism to make sure that the agent doesn’t fall
into an infinite loop.
o An interface that shows all the activities as well as the state of the agent’s “mind”
(i.e., its knowledge base and logical thought process)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Run

`npm run dev`
