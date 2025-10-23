import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
  const res = http.get("http://calculator-service.default.svc.cluster.local/add?a=5&b=3");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}