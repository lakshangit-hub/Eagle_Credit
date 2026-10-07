import { FormEvent } from "react"

const steps = ["Client", "Finances", "Guarantor", "Facility", "Review"]

type FieldProps = {
  label: string
  value?: string
  placeholder?: string
  verified?: boolean
  className?: string
}

function Field({
  label,
  value,
  placeholder,
  verified = false,
  className = "",
}: FieldProps) {
  return (
    <label className={`field ${className}`}>
      <span>{label}</span>
      <span className={`input-wrap ${verified ? "verified-input" : ""}`}>
        <input defaultValue={value} placeholder={placeholder} />
        {verified && <span className="verified">✓</span>}
      </span>
    </label>
  )
}

export default function App() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Eagle Credit home">
          Eagle Credit
        </a>

        <div className="header-right">
          <nav aria-label="Primary navigation">
            <a href="#">Dashborad</a>
            <a href="#">Clients</a>
            <a href="#">Loans</a>
            <a href="#">Reports</a>
          </nav>

          <div className="agent">
            <div className="agent-copy">
              <strong>Sarah Jenkins</strong>
              <span>SENIOR FIELD AGENT</span>
            </div>
            <span className="avatar">
              <img src="/assets/59e02.svg" width="12" height="12" alt="" />
            </span>
          </div>
        </div>
      </header>

      <section className="wizard-context" aria-label="Application progress">
        <div className="wizard-meta">
          <div className="status-block">
            <span className="autosaved">
              <i />
              AUTO-SAVED JUST NOW
            </span>
            <span className="eyebrow">
              STEP 1 OF 5&nbsp; • &nbsp;CLIENT IDENTIFICATION
            </span>
          </div>

          <div className="breadcrumb">
            <span>New Loan Origination</span>
            <b>/</b>
            <strong>Step Wizard</strong>
          </div>

          <span className="draft-id">Draft ID: AUR-8942-LN</span>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li className={index === 0 ? "active" : ""} key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <main>
        <form className="client-card" onSubmit={handleSubmit}>
          <div className="card-heading">
            <div>
              <h1>Client Details</h1>
              <p>Please record the client’s verified credentials</p>
            </div>
            <div className="client-code">
              <strong>Client Code: D8826001</strong>
              <button type="button">Save Client</button>
            </div>
          </div>

          <div className="form-grid">
            <Field
              className="label-bold"
              label="National ID / Citizen Number *"
              value="198866601234"
              verified
            />
            <Field
              className="label-bold"
              label="Date of Birth"
              value="1988-06-14"
            />
            <span className="grid-spacer" />

            <Field label="First Name" value="Miriam" />
            <Field label="Middle Name" value="Ochieng" />
            <Field label="Last Name *" value="Otieno" />

            <div className="address-fields">
              <Field
                label="Permanent Address"
                value="No. 12/4, Kibera Olympic Sector 4"
              />
              <input
                aria-label="Permanent address line 2"
                defaultValue="Adjacent to St. Jude Pharmacy"
              />
              <input
                aria-label="Permanent address line 3"
                defaultValue="House #B-12"
              />
              <input
                aria-label="Permanent address line 4"
                defaultValue="Colombo"
              />
            </div>

            <Field label="Primary Mobile Number *" value="+94 77 123 4567" />
            <Field
              label="Secondary Mobile Number"
              placeholder="07X XXX XXXX or +94 7X XX"
            />
            <span className="grid-spacer" />

            <label className="field trade-field">
              <span>Primary Enterprise Trade</span>
              <select defaultValue="Retail & Grocery Stall">
                <option>Retail &amp; Grocery Stall</option>
                <option>Agriculture</option>
                <option>Services</option>
              </select>
              <small>Sector determines grace period rules.</small>
            </label>
          </div>

          <div className="form-actions">
            <button className="back-button" type="button">
              ←&nbsp; Back
            </button>
            <div>
              <button className="save-draft" type="button">
                ▣&nbsp; Save Draft
              </button>
              <button className="continue-button" type="submit">
                Continue to Finances&nbsp; →
              </button>
            </div>
          </div>
        </form>
      </main>

      <footer>
        <span>© 2026 Eagle Credit (PVT) LTD.</span>
        <div>
          <span className="encrypted">
            <i />
            Encrypted End-to-End
          </span>
          <a href="#">Privacy Notice</a>
          <a href="#">Disclosures</a>
        </div>
      </footer>
    </div>
  )
}
