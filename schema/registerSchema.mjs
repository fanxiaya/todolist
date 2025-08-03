const registerSchema = {
    name: {
      notEmpty: {
        errorMessage: 'name 不能为空'
      },
      trim: true
    },
    age: {
      notEmpty: {
        errorMessage: 'age 不能为空'
      },
      isInt: {
        options: { min: 1, max: 100 },
        errorMessage: 'age 必须是 1 到 100 之间的整数'
      }
    },
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
  
  export default registerSchema;
  