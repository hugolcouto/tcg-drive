import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Button } from ".";

describe("Componente Button", () => {
  test("deve renderizar o botão com o texto correto", () => {
    render(<Button>Clique aqui</Button>);

    const buttonElement = screen.getByRole("button", { name: /clique aqui/i });

    expect(buttonElement).toBeInTheDocument();
  });

  test("deve chamar a função onClick quando clicado", async () => {
    const handleClick = jest.fn<void, [React.MouseEvent<HTMLButtonElement>]>();
    render(<Button onClick={handleClick}>Clique para Ação</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /clique para ação/i,
    });

    await userEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("deve estar desabilitado e não chamar onClick quando a propriedade disabled for verdadeira", async () => {
    const handleClick = jest.fn<void, [React.MouseEvent<HTMLButtonElement>]>();
    render(
      <Button onClick={handleClick} disabled={true}>
        Não Clicável
      </Button>
    );
    const buttonElement = screen.getByRole("button", { name: /não clicável/i });

    expect(buttonElement).toBeDisabled();

    await userEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
