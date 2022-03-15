import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    const getData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        loading: false,
        error: null,
        data: data,
      });
    };
    getData();
  }, [url]);

  return state;
};

// import { useEffect, useRef, useState } from "react";

// export const useFetch = (url) => {
//   const isMounted = useRef(true);

//   const [state, setState] = useState({
//     data: null,
//     loading: true,
//     error: null,
//   });

//   useEffect(() => {
//     return () => {
//       isMounted.current = false;
//     };
//   }, []);

//   useEffect(() => {
//     setState({
//       data: null,
//       loading: true,
//       error: null,
//     });

//     const getData = async () => {
//       const resp = await fetch(url);
//       const data = await resp.json();

//       setTimeout(() => {
//         if (isMounted.current) {
//           setState({
//             loading: false,
//             error: null,
//             data: data,
//           });
//         } else {
//           console.log("No se ejecutó");
//         }
//       }, 3000);
//     };
//     getData();
//   }, [url]);

//   return state;
// };
