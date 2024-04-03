export const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="contacts__upper"></div>
      <div className="contacts__lower"></div>
      <div className="contacts__centered columns__container">
        <div className="columns__column">
          <p className="contacts__title">Feel free to contact me:</p>
          <div className="contactEntriesBlock">
            <p>Email: bakai.pochat@gmail.com</p>
            <p>Phone number: +996 500 391990</p>
            <p>Telegram: t.me/bakai_abc</p>
            <p>LinkedIn: linkedin.com/in/bakai-taalaibek</p>
          </div>
        </div>
        <div className="columns__column">
          <p className="contacts__title">Or leave a comment below:</p>
          <p>form</p>
        </div>
      </div>
    </div>
  )
}
