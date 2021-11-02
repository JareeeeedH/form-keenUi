let getters = {
    validateList(state){
        return{
            account: state.accountContent.isValidAccount,
            password: state.passwordContent.isValidPassword,
            passwordConfirm: state.confirmPasswordContent.isValidConfirm,
            name: state.nameContent.isValidName,
            email: state.emailContent.isValidEmailAddress
        }
    },
    memberInformation(state){
        return {
            account: state.accountContent.accountText,
            password: state.passwordContent.passwordText,
            name: state.nameContent.name,
            gender: state.gender,
            email: state.emailContent.emailAddress
        }
    },
  }
  
export default getters
  