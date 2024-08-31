export default function Contact() {
return (
    <div className="d-flex flex-column justify-content-center align-items-center">
    <h1 className="text-center mt-3">Contact Me</h1>
    <div className="w-100 mt-4" style={{ maxWidth: '400px' }}>
      <form className="d-flex flex-column">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" required className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" required className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" name="message" required className="form-control"></textarea>
        </div>

        <div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  </div>
  );
}
