exports.aboutPage = (req, res) => {
  res.status(200).render("about",
  {page_name:'about'}
  );
};
