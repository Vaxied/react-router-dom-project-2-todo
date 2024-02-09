import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentwithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("Hubo cambios en los To Dos");
          setStorageChange(true);
        }
      };
      window.addEventListener("storage", onChange);

      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

    const toggleDisplay = () => {
      setStorageChange(false);
      props.syncronize();
    };
    return (
      <>
        <WrappedComponent
          display={storageChange}
          toggleDisplay={toggleDisplay}
        />
      </>
    );
  };
}

export { withStorageListener };
