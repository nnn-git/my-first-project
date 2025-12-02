import { render, screen, fireEvent } from '@testing-library/react';
import Login from '@/app/login/page';
import '@testing-library/jest-dom';

describe('US-5: Login Page', () => {
  // 1. Форм зөв харагдаж байгаа эсэхийг шалгах
  it('renders login inputs and button', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText(/Email хаяг/i);
    const passwordInput = screen.getByPlaceholderText(/Нууц үг/i);
    const button = screen.getByRole('button', { name: /Нэвтрэх/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  // 2. Хэрэглэгч юм бичихэд утга нь өөрчлөгдөж байгаа эсэхийг шалгах
  it('updates input values on change', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText(/Email хаяг/i);
    fireEvent.change(emailInput, { target: { value: 'student@example.com' } });
    
    expect(emailInput.value).toBe('student@example.com');
  });
});