// Add your Supabase Project URL and anon/public key after creating the project.
// Never place a Supabase service_role key in this public website.
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";
const form = document.getElementById("creatorForm");
const statusEl = document.getElementById("formStatus");
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    statusEl.textContent = "Website preview is ready, but database connection is not configured yet. Your application has NOT been saved. Contact Norixel on WhatsApp for now.";
    statusEl.className = "form-status error";
    return;
  }
  const data = Object.fromEntries(new FormData(form).entries());
  delete data.consent;
  data.followers = data.followers ? Number(data.followers) : null;
  data.average_views = data.average_views ? Number(data.average_views) : null;
  data.status = "pending";
  const submit = form.querySelector("button[type=submit]");
  submit.disabled = true;
  submit.textContent = "Submitting...";
  try {
    const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { error } = await client.from("creator_applications").insert(data);
    if (error) throw error;
    form.reset();
    statusEl.textContent = "Application submitted successfully. The Norixel team will review your profile.";
    statusEl.className = "form-status success";
  } catch (err) {
    statusEl.textContent = "Could not submit right now. Please check your details or contact Norixel on WhatsApp.";
    statusEl.className = "form-status error";
  } finally {
    submit.disabled = false;
    submit.innerHTML = 'Submit application <span>↗</span>';
  }
});
