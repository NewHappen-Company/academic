import { fireEvent, render } from "@testing-library/react";
import GenerateCodeForm, { IGenerateCodeFormProps } from "../../src/components/GenerateCodeForm";

function renderGenerateCodeForm(props: Partial<IGenerateCodeFormProps> = {}) {
  const defaultProps: IGenerateCodeFormProps = {
    loading: false,
    code: "",
    onSubmit: () => {
      return true || undefined;
    },
    clearCode: () => {
      return;
    }
  }

  return render(<GenerateCodeForm {...defaultProps} {...props}/>)
}

describe("Generate Code Form", () => {
  test('Should be display a blank Generate Code Form', async () => {
    const { findByTestId } = renderGenerateCodeForm();
    
    const generateCodeForm = await findByTestId('generate-code-form');
    
    expect(generateCodeForm).toHaveFormValues({
      studentName: '',
      studentNumber: '',
      studentEmail: '',
      studentPhone: ''
    })
  });

  test("Shouldn't allow generate invite code with missing values", async () => {
    const onSubmit = jest.fn();
    const { findByTestId, queryByTestId } = renderGenerateCodeForm({ onSubmit });

    const studentName = await findByTestId('studentName');
    fireEvent.change(studentName, { target: { value: 'Yuri Baza' } });

    const studentNumber = await findByTestId('studentNumber');
    fireEvent.change(studentNumber, { target: { value: '1234567' } });

    const studentEmail = await findByTestId('studentEmail');
    fireEvent.change(studentEmail, { target: { value: 'yuribaza@alunos.utfpr.edu.br' } });

    const submit = await findByTestId('submit');

    fireEvent.submit(submit);

    expect(onSubmit).toHaveBeenCalledWith(expect.anything(), {
      studentEmail: "yuribaza@alunos.utfpr.edu.br", 
      studentName: "Yuri Baza", 
      studentNumber: "1234567", 
      studentPhone: ""
    });

    expect(queryByTestId(/code-invite/i)).toBeNull();
  })

  test("Should allow generate invite code", async () => {
    const onSubmit = jest.fn();
    const { findByTestId } = renderGenerateCodeForm({ onSubmit, code: '' });

    const generateCodeForm = await findByTestId('generate-code-form');

    const studentName = await findByTestId('studentName');
    fireEvent.change(studentName, { target: { value: 'Yuri Baza' } });

    const studentNumber = await findByTestId('studentNumber');
    fireEvent.change(studentNumber, { target: { value: '1234567' } });

    const studentEmail = await findByTestId('studentEmail');
    fireEvent.change(studentEmail, { target: { value: 'yuribaza@alunos.utfpr.edu.br' } });

    const studentPhone = await findByTestId('studentPhone');
    fireEvent.change(studentPhone, { target: { value: '44999999999' } });

    const submit = await findByTestId('submit');

    fireEvent.submit(submit);

    expect(onSubmit).toHaveBeenCalledWith(expect.anything(), {
      studentEmail: "yuribaza@alunos.utfpr.edu.br", 
      studentName: "Yuri Baza", 
      studentNumber: "1234567", 
      studentPhone: "(44) 99999-9999"
    });
  })
})  