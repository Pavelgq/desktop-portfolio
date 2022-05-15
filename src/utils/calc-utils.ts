export const getAge = (dateOfBirth: Date): number => {
  const  now = new Date(); //Текущя дата
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени

  const dobnow = new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate());
  let age; //Возраст

  age = today.getFullYear() - dateOfBirth.getFullYear();
  if (today < dobnow) {
    age = age-1;
  }

  return age;
}

export const getPeriod = (): number => {

  return 0
}