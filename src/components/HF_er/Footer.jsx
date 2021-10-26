const Footer = () => {
  return (
    <footer className=" bg-dark">
      <div className="footer_bottom">
        <div className="container">
          <div className="row ">
            <div className="col-12 align-items-center">
              <p className="text-center text-muted small py-2 mb-0">
                All Rights Reserved © Copyright
                <span className="brand-text"> Savior</span> {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
