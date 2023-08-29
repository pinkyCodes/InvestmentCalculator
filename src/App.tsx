import { useState } from 'react';
import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentResult from './components/InvestmentResult/InvestmentResult';
import { UserData, UserInput } from './models/user';

const App = (): JSX.Element => {

  const [userData, setUserData] = useState<UserData[]>([]);
  const [userInput, setUserInput] = useState<UserInput>();

  const calculateHandler = (userInput: UserInput): void => {
    setUserInput(userInput);

    const yearlyData = [];

    let currentSavings = userInput.currentSavings;
    const yearlyContribution = userInput.yearlyContribution;
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setUserData(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />

      {userData.length > 0 ?
        <InvestmentResult data={userData} initialInvestment={userInput!.currentSavings} />
        :
        <p style={{ textAlign: 'center' }}>Nothing to calculate yet.</p>
      }

    </div>
  );
};

export default App;