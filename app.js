// https://www.omnicalculator.com/other/dpmo

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const DPMORadio = document.getElementById('DPMORadio');
const ofdefectsRadio = document.getElementById('ofdefectsRadio');
const ofunitsRadio = document.getElementById('ofunitsRadio');
const defectopportunitiesRadio = document.getElementById('defectopportunitiesRadio');

let DPMO;
let ofdefects = v1;
let ofunits = v2;
let defectopportunities = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

DPMORadio.addEventListener('click', function() {
  variable1.textContent = '# of Defects';
  variable2.textContent = '# of Units';
  variable3.textContent = '# Defect opportunities';
  ofdefects = v1;
  ofunits = v2;
  defectopportunities = v3;
  result.textContent = '';
});

ofdefectsRadio.addEventListener('click', function() {
  variable1.textContent = 'DPMO';
  variable2.textContent = '# of Units';
  variable3.textContent = '# Defect opportunities';
  DPMO = v1;
  ofunits = v2;
  defectopportunities = v3;
  result.textContent = '';
});

ofunitsRadio.addEventListener('click', function() {
  variable1.textContent = 'DPMO';
  variable2.textContent = '# of Defects';
  variable3.textContent = '# Defect opportunities';
  DPMO = v1;
  ofdefects = v2;
  defectopportunities = v3;
  result.textContent = '';
});

defectopportunitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'DPMO';
  variable2.textContent = '# of Defects';
  variable3.textContent = '# of Units';
  DPMO = v1;
  ofdefects = v2;
  ofunits = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(DPMORadio.checked)
    result.textContent = `DPMO = ${computeDPMO().toFixed(2)}`;

  else if(ofdefectsRadio.checked)
    result.textContent = `# of Defects = ${computeofdefects().toFixed(2)}`;

  else if(ofunitsRadio.checked)
    result.textContent = `# of Units = ${computeofunits().toFixed(2)}`;

  else if(defectopportunitiesRadio.checked)
    result.textContent = `# Defect opportunities = ${computedefectopportunities().toFixed(2)}`;
})

// calculation

// DPMO = 1000000 * ofdefects / (ofunits * defectopportunities)

function computeDPMO() {
  return 1000000 * Number(ofdefects.value) / (Number(ofunits.value) * Number(defectopportunities.value));
}

function computeofdefects() {
  return (Number(DPMO.value) * (Number(ofunits.value) * Number(defectopportunities.value))) / 1000000;
}

function computeofunits() {
  return 1000000 * Number(ofdefects.value) / (Number(DPMO.value) * Number(defectopportunities.value));
}

function computedefectopportunities() {
  return 1000000 * Number(ofdefects.value) / (Number(ofunits.value) * Number(DPMO.value));
}