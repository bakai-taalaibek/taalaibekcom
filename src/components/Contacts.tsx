export const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="contacts__upper"></div>
      <div className="contacts__lower"></div>
      <div className="contacts__centered columns__container">
        <div className="columns__column">
          Feel free to contact me:
          <p>email</p>
          <p>phone number</p>
          <p>telegram</p>
          <p>linkedIn</p>
        </div>
        <div className="columns__column--centered">
          Or leave a comment:
          <p>form</p>
        </div>
      </div>
    </div>
  )
}
