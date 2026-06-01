const BASE_URL = "https://sas.sante.fr/sas/recherche";
const PRACTITIONER_OID = "urn:oid:1.2.250.1.71.4.2.1|810002725272";
const SPECIALTY_OID_PREFIX = "urn:oid:1.2.250.1.213.2.28|";

function val(id) {
  return document.getElementById(id)?.value?.trim() || "";
}

function buildUrl() {
  const specialty = val("npt_specialty");
  const city = val("npt_city");
  const streetname = [val("npt_street_number"), val("npt_street_name")]
    .filter(Boolean).join(" ");

  const params = new URLSearchParams({
    practitioner: PRACTITIONER_OID,
    specialty: SPECIALTY_OID_PREFIX + specialty,
    city,
    streetname,
    origin: "TEST-SAMU000"
  });

  return `${BASE_URL}?${params.toString()}`;
}

function openSearchUrl() {
  window.open(buildUrl(), "_blank");
}