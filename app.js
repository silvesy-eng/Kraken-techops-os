const menuButton = document.getElementById('menuButton');
const mobileNav = document.getElementById('mobileNav');

menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const reactiveRange = document.getElementById('reactiveRange');
const reactiveValue = document.getElementById('reactiveValue');
const reactiveBar = document.getElementById('reactiveBar');
const projectBar = document.getElementById('projectBar');
const improveBar = document.getElementById('improveBar');
const reactiveLegend = document.getElementById('reactiveLegend');
const projectLegend = document.getElementById('projectLegend');
const improveLegend = document.getElementById('improveLegend');
const capacityAdvice = document.getElementById('capacityAdvice');
const capacityStatus = document.getElementById('capacityStatus');

function updateCapacity() {
  const reactive = Number(reactiveRange.value);
  const remaining = 100 - reactive;
  const projects = Math.round(remaining * 0.58);
  const improve = remaining - projects;

  reactiveValue.textContent = reactive;
  reactiveBar.style.width = `${reactive}%`;
  projectBar.style.width = `${projects}%`;
  improveBar.style.width = `${improve}%`;
  reactiveLegend.textContent = `${reactive}%`;
  projectLegend.textContent = `${projects}%`;
  improveLegend.textContent = `${improve}%`;

  if (reactive >= 56) {
    capacityStatus.textContent = 'Interrupt-heavy';
    capacityAdvice.textContent = 'Reactive demand is consuming the system. Protect a smaller number of critical projects and investigate the largest repeat drivers of support.';
  } else if (reactive <= 30) {
    capacityStatus.textContent = 'Project-heavy';
    capacityAdvice.textContent = 'Strong project runway, but validate that frontline demand is genuinely this low before committing more change into the environment.';
  } else {
    capacityStatus.textContent = 'Balanced';
    capacityAdvice.textContent = 'Healthy balance: enough runway for planned change without starving frontline support.';
  }
}

reactiveRange?.addEventListener('input', updateCapacity);

const incidentContent = {
  detect: {
    label: 'DETECT',
    title: 'Establish reality before solving.',
    body: 'Confirm who is affected, business impact, scope, security implications and whether the failure is still expanding.',
    bullets: ['Assign one accountable incident lead', 'Capture known / unknown / next evidence', 'Set severity from impact, not emotion']
  },
  stabilise: {
    label: 'STABILISE',
    title: 'Restore safety and reduce the blast radius.',
    body: 'Prioritise the fastest safe route to stabilisation. A temporary mitigation can be better than a perfect fix while impact is active.',
    bullets: ['Separate mitigation from root-cause work', 'Time-box parallel investigations', 'Define explicit rollback / fallback options']
  },
  communicate: {
    label: 'COMMUNICATE',
    title: 'Tell people what they need to know.',
    body: 'Updates should reduce uncertainty: what is affected, what users should do, what the team is doing and when the next meaningful update will come.',
    bullets: ['One source of truth', 'Audience-appropriate language', 'Never invent certainty to fill silence']
  },
  learn: {
    label: 'LEARN',
    title: 'Fix the system, not the person.',
    body: 'Capture the conditions that allowed the incident, the decisions that helped or slowed recovery, and the smallest set of actions that materially reduce recurrence.',
    bullets: ['Blameless evidence over storytelling', 'Actions require owners and due dates', 'Verify the fix changed the risk']
  }
};

const incidentDetail = document.getElementById('incidentDetail');
document.querySelectorAll('.incident-stage').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.incident-stage').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const content = incidentContent[button.dataset.stage];
    incidentDetail.innerHTML = `
      <span class="label">${content.label}</span>
      <h3>${content.title}</h3>
      <p>${content.body}</p>
      <ul>${content.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
