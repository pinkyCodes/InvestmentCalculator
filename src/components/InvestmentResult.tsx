import UserData from "../models/UserData.model";
import currencyFormatter from '../utils/currencyFormatter';

interface InvestmentResultProps {
    data: UserData[];
    initialInvestment: string;
};

const InvestmentResult: React.FC<InvestmentResultProps> = ({ data, initialInvestment }) => {

    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{currencyFormatter.format(yearData.savingsEndOfYear)}</td>
                        <td>{currencyFormatter.format(yearData.yearlyInterest)}</td>
                        <td>{currencyFormatter.format(
                            yearData.savingsEndOfYear -
                            Number(initialInvestment) -
                            yearData.yearlyContribution * yearData.year
                        )}</td>
                        <td>{currencyFormatter.format(
                            initialInvestment +
                            yearData.yearlyContribution * yearData.year
                        )}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default InvestmentResult;
