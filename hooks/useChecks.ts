import { useState } from 'react';

interface useChecksReturns {
  checks: boolean[];
  checkAll: boolean;
  handleCheck: (idx: number) => void;
  handleAllCheck: () => void;
}

const useChecks = (length: number): useChecksReturns => {
  const [checkAll, setCheckAll] = useState(false);
  const [checks, setChecks] = useState<boolean[]>(
    new Array(length).fill(false),
  );

  const handleCheck = (idx: number) => {
    const tChecks = [...checks];
    tChecks[idx] = !tChecks[idx];

    setChecks(tChecks);
  };

  const handleAllCheck = () => {
    if (!checkAll) {
      setChecks(new Array(length).fill(true));
    } else {
      setChecks(new Array(length).fill(false));
    }

    setCheckAll(!checkAll);
  };

  return { checks, handleCheck, checkAll, handleAllCheck };
};

export default useChecks;
