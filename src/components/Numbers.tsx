import { useMemo } from 'react';

interface NumbersProps {
  title: string,
  numbers: number[]
}

const Numbers = ({title, numbers}:NumbersProps) => {
  const numbersArray = useMemo(() => {
    const numbersSort = numbers.sort((a: number, b: number):number => {
      console.log('Sorting...');

      return a - b;
    });

    return numbersSort;
  }, [])

  console.log(numbersArray);


  return(
    <>
      {
        numbersArray.map((number) => <p key={number}>{number}</p> )
      }
      <p>{title}</p>
    </>
  )
}

export default Numbers;
