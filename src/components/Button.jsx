
const Button = ({ type, onClick, children, className }) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none transition duration-300';
    const primaryStyles = 'text-white';

    const styles = type === 'primary' ? `${baseStyles} ${primaryStyles}` : `${baseStyles}`;

    return (
        <button className={`${styles} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
