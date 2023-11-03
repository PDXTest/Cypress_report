
export default class signUplocator{

    //static entefnameLocatorNew = '//input[@name="first_name"]' 

    get enteFirstNameLocator(){
        return '//input[@name="first_name"]'        
    }

    get enterLastNameLocator(){
        return '[name=last_name]'        
    }

    get enterEmailLocator(){
        return '[name=email]'        
    }

    get enterPhoneLocator(){
        return '[name=phone]'        
    }
            
    

}

