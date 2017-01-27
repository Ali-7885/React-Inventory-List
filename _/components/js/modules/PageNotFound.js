export const PageNotFound = ({ location }) =>
<div className="container">
  <div className="row">
    <div className="col-sm-6 col-sm-offset-3 col-xs-12">
        <h1>Oops ! - The page has not found !</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>
  </div>
</div>
