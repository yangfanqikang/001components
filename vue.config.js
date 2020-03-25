module.exports = {
  publicPath: "",
  lintOnSave: false,
  devServer: {
    before(app) {
      app.get(" ", (req, res) => {
        setTimeout(() => {
          res.json([
            { name: "全栈", price: "8999" },
            { name: "全栈", price: "8999" }
          ]);
        }, 1000);
      });
    }
  }
};
