import { PrismaClient, Speaker, Talk } from '@prisma/client';

const prisma = new PrismaClient();

// Mocks
const talks: Talk[] = [
  {
    id: 'AZTDGHYETUYASLKQJQSHFG5672',
    title: 'DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d\'ADN.',
    abstract: 'Le stockage de données sur ADN est une méthode de stockage de données qui utilise la double hélice d\'ADN pour stocker des données binaires dans les brins d\'ADN. Les chercheurs ont pu stocker 215 pétaoctets (215 millions de gigaoctets) dans un seul gramme d\'ADN, et récupérer les données avec une précision de 100%. Cette méthode de stockage de données est très prometteuse pour l\'archivage à long terme, car l\'ADN peut rester stable pendant des milliers d\'années.',
    speakerId: '56gh678lkjh',
    tags: [
      '#technology',
      '#stockage',
      '#dna',
    ],
    language: 'fr',
    date: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'EZGHTYUISALJQKJQS22HFG5672',
    title: 'DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d\'ADN.',
    abstract: 'Le stockage de données sur ADN est une méthode de stockage de données qui utilise la double hélice d\'ADN pour stocker des données binaires dans les brins d\'ADN. Les chercheurs ont pu stocker 215 pétaoctets (215 millions de gigaoctets) dans un seul gramme d\'ADN, et récupérer les données avec une précision de 100%. Cette méthode de stockage de données est très prometteuse pour l\'archivage à long terme, car l\'ADN peut rester stable pendant des milliers d\'années.',
    speakerId: '56gh678lkjh',
    tags: [
      '#technology',
      '#stockage',
      '#dna',
    ],
    language: 'fr',
    date: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const speakers: Speaker[] = [
  {
    id: '56gh678lkjh',
    fullName: 'John Doe',
    photoUrl: 'https://via.placeholder.com/150',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in nunc vitae',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: null,
  },
];

async function main() {
  for (const speaker of speakers) {
    await prisma.speaker.upsert({
      where: { id: speaker.id },
      update: {},
      create: speaker,
    });
  }

  for (const talk of talks) {
    await prisma.talk.upsert({
      where: { id: talk.id },
      update: {},
      create: talk,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
