import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserForm from '../src/Components/UserForm/UserForm';

describe("UserForm", () => {
    test("Enviando Informacion por Form", () => {
        
        const originalAlert = window.alert;
        window.alert = jest.fn();

        render(<UserForm />);

        fireEvent.change(screen.getByLabelText(/Correo electrónico:/i), { target: { value: "test@example.com" } });
        fireEvent.change(screen.getByLabelText(/Asunto/i), { target: { value: "Prueba de asunto" } });
        fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: "Este es un mensaje de prueba" } });

        fireEvent.click(screen.getByText(/Enviar/i));

        expect(window.alert).toHaveBeenCalledWith('Se Enviara el siguiente OBJ validado : {"email":"test@example.com","asunto":"Prueba de asunto","mensaje":"Este es un mensaje de prueba"}');

        window.alert = originalAlert;
    });

    test('Should display email validation error for invalid email', () => {
        render(<UserForm />);
      
        fireEvent.change(screen.getByLabelText(/Correo electrónico:/i), { target: { value: 'invalid_email' } });
      
        expect(screen.getByText(/El email debe ser valido/i)).toBeDefined;
    });
    test('Should display message validation error for short message', () => {
        render(<UserForm />);
      
        fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Short' } });
      
        expect(screen.getByText(/El Mensaje debe tener menos de 250 caracteres y mas de 10 caracteres/i)).toBeDefined;
    });
    test('Should display subject validation error for short subject', () => {
        render(<UserForm />);
      
        fireEvent.change(screen.getByLabelText(/Asunto/i), { target: { value: "s" } });
      
        expect(screen.getByText(/El Asunto debe tener menos de 30 caracteres y mas de 2 caracter/i)).toBeDefined;
    });
});