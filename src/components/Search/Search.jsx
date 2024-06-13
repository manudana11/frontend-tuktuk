import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserByName } from '../../features/auth/authSlice';
import Profile from '../Profile/Profile';


const Search = () => {
    const {name} = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserByName(name));
    }, [name])
  return (
    <div><Profile/></div>
  )
}

export default Search

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getUserByName } from '../../features/auth/authSlice';

// const SearchResults = () => {
//   const { name } = useParams();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.searchedUser);
//   const status = useSelector((state) => state.user.status);

//   useEffect(() => {
//     if (name) {
//       dispatch(getUserByName(username));
//     }
//   }, [name, dispatch]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <div>No user found</div>;
//   }

//   return (
//     <div>
//       <h1>Search Results for "{name}"</h1>
//       <div>
//         <p>Username: {user.username}</p>
//         <p>Email: {user.email}</p>
//         {/* Renderiza más información del usuario según tu necesidad */}
//       </div>
//     </div>
//   );
// }

// export default SearchResults;

