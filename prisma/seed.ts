import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  await prisma.pet.create({
    data: {
      name: 'Whiskers',
      age: 1,
      type: 'dog',
      gender: 'female',
      location: 'Couva, Trinidad',
      breed: 'shaggy',
      shelterId: 1,
      photo:
        'https://www.akc.org/wp-content/uploads/2017/04/Lagotto-Romangolo-Tongue-Out.jpg',
      vaccinated: true,
      neutered: false,
    },
  });

  await prisma.pet.create({
    data: {
      name: 'Zeo',
      age: 1,
      type: 'rabbit',
      gender: 'female',
      location: 'Charlotte, Tobago',
      // breed: 'German Sheppy',
      shelterId: 1,
      photo:
        'https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg',
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
