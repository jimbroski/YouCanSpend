import Budget from '../models/budget';
import Saving from '../models/saving';

const models = { Budget, Saving };

export default function modelSelector (name) {
  return models[name];
}
