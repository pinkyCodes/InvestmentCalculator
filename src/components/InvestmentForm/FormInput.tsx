interface FormInputProps {
    value: number;
    id: string;
    title: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = (props: FormInputProps): JSX.Element => {
    const { value, id, title, onChange } = props;

    return (
        <p>
            <label htmlFor={id}>{title}</label>
            <input
                type="number"
                id={id}
                aria-label={id}
                value={value || ''}
                onChange={onChange}
            />
        </p>
    );
};

export default FormInput;