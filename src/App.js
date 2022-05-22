import { Form } from "./Component/Form";

function App() {
  const handleSubmit = (fieldValues) => {
    console.log(
      "🚀 ~ file: App.js ~ line 5 ~ handleSubmit ~ fieldValues",
      fieldValues
    );
  };

  return (
    <div className="App">
      <Form
        onSubmit={handleSubmit}
        autoComplete="off"
        initialValue={{
          userName: "Destiny__",
          emal: "nicai@nc.com",
          tel: "123456789",
        }}
      >
        <Form.Input label="姓名" name="userName" />
        <Form.Input label="邮件" name="emal" type="email" />
        <Form.Input label="手机" name="tel" type="tel" />
        <Form.Button>提交</Form.Button>
      </Form>
    </div>
  );
}

export default App;
