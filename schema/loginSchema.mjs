const loginSchema = {
    email: {
      notEmpty: {
        errorMessage: 'email 不能为空'
      },
      isEmail: {
        errorMessage: 'email 格式不正确'
      },
      normalizeEmail: true
    },
    password: {
      notEmpty: {
        errorMessage: 'password 不能为空'
      },
      isLength: {
        options: { min: 3 },
        errorMessage: 'password 至少需要 3 位'
      }
    }
  };
  
  export default loginSchema;
  