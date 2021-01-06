import React from 'react';
import Router from 'next/router';

const login = '/Login?redirected=true'; // Define your login route address.


/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = async () => {

  try{
    console.log('checkUserAuthentication... it is being called')

    const obj = localStorage.getItem('objUser');
    
    if(!obj){
      console.log('checkUserAuthentication... it is empty')
      return { auth: null}
    }

    const {user, password} = JSON.parse(obj)
    console.log(`${user}, ${password}`)
    
    const response = await fetch(`http://localhost:3333/users?user=${user}&password=${password}`)
    const data = await response.json();
    
    if (data.length >0)return { auth: {...data[0]}}
    
    return { auth: null}
  }catch (exception){
    return { auth: null}
  }
  

  
  //return { auth: null }; // change null to { isAdmin: true } for test it.
};

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    console.log('checkUserAuthentication... it will call')
    const userAuth = await checkUserAuthentication();
    console.log('checkUserAuthentication... it was called')

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

