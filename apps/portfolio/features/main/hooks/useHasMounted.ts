import { useEffect, useState } from "react";

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  // hydration완료 후 보여주기 (window 생기고 나서)
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export default useHasMounted;
