import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DialogScreen } from '..';

describe('<DialogScreen />', () => {
  it('Render in open mode', () => {
    render(<DialogScreen title="TITLE" open />); // Mostrarmos el modal
    expect(screen.getByText(/TITLE/)).toBeInTheDocument(); // Validamos que exista el título (existe solo cuando se está mostrando)
  });

  it('Render in close mode', () => {
    render(<DialogScreen title="TITLE" />); // Solo renderizamos el modal (no mostrado)
    expect(screen.queryByText(/TITLE/)).not.toBeInTheDocument(); // No debería existir el título
  });

  it('Render in open mode with close action', () => {
    render(<DialogScreen title="TITLE" open />); // Mostrarmos el modal
    expect(screen.getByText(/TITLE/)).toBeInTheDocument(); // Debería existir el título
    fireEvent.click(screen.getByText(/Cerrar/)); // Damos clic en botón cerrar
    expect(screen.queryByText(/TITLE/)).not.toBeInTheDocument(); // No debería existir el título, ya que se cerró el modal
  });
});
