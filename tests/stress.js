import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 120,
  duration: '60s',
};

export default function() {
  for (let x = 0; x < 20; x++) {
    http.get('http://localhost:3004/reviews/');
  }
  sleep(1);
}