import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useUrlLocation() {
  const [endpoint, setEndpoint] = useState("");
  const location = useLocation();

  useEffect(() => {
    setEndpoint(location.pathname);
  }, [location.pathname]);

  return endpoint; 
}

export default useUrlLocation;
