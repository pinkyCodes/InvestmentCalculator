interface FormInputProps {
    value: number;
    id: string;
    title: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = (props: FormInputProps): JSX.Element => {
    const { value, id, title, onInputChange } = props;

    return (
        <p>
            <label htmlFor={id}>{title}</label>
            <input
                type="number"
                id={id}
                aria-label={id}
                value={value || ''}
                onChange={onInputChange}
            />
        </p>
    );
};

export default FormInput;