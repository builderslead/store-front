const customers = require("../model/customer");

exports.customerAddress = async (req, res) => {
  const customer = await customers.find({ "user.mobile": req.query.mobile });
  if (!customer) {
    return res.json({
      status: 404,
      success: false,
      message: "customer Not Found!",
    });
  }
  res.json({
    status: 200,
    success: true,
    message: "customers Address!",
    customers: customer,
  });
};
