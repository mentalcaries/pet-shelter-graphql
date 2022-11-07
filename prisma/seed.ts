import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  await prisma.pet.create({
    data: {
      name: 'Ruff',
      age: 1,
      type: 'dog',
      gender: 'male',
      location: 'Penal, Trinidad',
      breed: 'ratter',
      shelterId: 1,
      photo:
        'https://www.akc.org/wp-content/uploads/2017/04/Lagotto-Romangolo-Tongue-Out.jpg',
      vaccinated: true,
      neutered: false,
    },
  });

  await prisma.pet.create({
    data: {
      name: 'Martha',
      age: 1,
      type: 'dog',
      gender: 'female',
      location: 'Penal, Trinidad',
      breed: 'German Sheppy',
      shelterId: 1,
      photo:
        'http://cdn.akc.org/content/article-body-image/keeshond_dog_pictures.jpg',
    },
  });

  // await prisma.shelter.create({
  //   data: {
  //     name: 'Animal Home'
  //   }
  // })

  // await prisma.user.create({
  //   data: {
  //     name: 'Rufus Parl',
  //     email: 'rufus@email.com',
  //     location: 'Penal'
  //   }
  // })
}

main().then(() => console.log('Data seeded...🌴'));
