import {TestBed, getTestBed} from '@angular/core/testing';
import { UserApiService } from './user-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('UserService', () => {
  let injector: TestBed;
  let service: UserApiService;
  let httpMock: HttpTestingController;
  const userList = [
    {
      name: {
        title: 'ms',
        first: 'asta',
        last: 'madsen'
      },
      email: 'asta.madsen@example.com',
      phone: '15225784',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/71.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/71.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/71.jpg'
      }
    },
    {
      name: {
        title: 'ms',
        first: 'charline',
        last: 'brun'
      },
      email: 'charline.brun@example.com',
      phone: '02-06-11-50-64',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/79.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/79.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/79.jpg'
      }
    },
    {
      name: {
        title: 'ms',
        first: 'lena',
        last: 'wirth'
      },
      email: 'lena.wirth@example.com',
      phone: '0941-2414942',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/62.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/62.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/62.jpg'
      }
    },
    {
      name: {
        title: 'ms',
        first: 'mia',
        last: 'david'
      },
      email: 'mia.david@example.com',
      phone: '05-36-89-92-26',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/91.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/91.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg'
      }
    },
    {
      name: {
        title: 'madame',
        first: 'célia',
        last: 'lacroix'
      },
      email: 'célia.lacroix@example.com',
      phone: '(536)-145-9282',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/83.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/83.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/83.jpg'
      }
    },
    {
      name: {
        title: 'miss',
        first: 'matilda',
        last: 'clarke'
      },
      email: 'matilda.clarke@example.com',
      phone: '(000)-930-7091',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/94.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/94.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/94.jpg'
      }
    },
    {
      name: {
        title: 'ms',
        first: 'amy',
        last: 'brown'
      },
      email: 'amy.brown@example.com',
      phone: '369-241-9023',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/86.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/86.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/86.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'david',
        last: 'ambrose'
      },
      email: 'david.ambrose@example.com',
      phone: '848-744-2618',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/76.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/76.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'arthur',
        last: 'ross'
      },
      email: 'arthur.ross@example.com',
      phone: '273-350-8060',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/33.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/33.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'kuzey',
        last: 'alnıaçık'
      },
      email: 'kuzey.alnıaçık@example.com',
      phone: '(750)-778-7459',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/13.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/13.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/13.jpg'
      }
    },
    {
      name: {
        title: 'mrs',
        first: 'ava',
        last: 'lévesque'
      },
      email: 'ava.lévesque@example.com',
      phone: '029-044-4280',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/61.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/61.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/61.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'oğuzhan',
        last: 'durmaz'
      },
      email: 'oğuzhan.durmaz@example.com',
      phone: '(318)-335-4342',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/89.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/89.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/89.jpg'
      }
    },
    {
      name: {
        title: 'mrs',
        first: 'alice',
        last: 'jackson'
      },
      email: 'alice.jackson@example.com',
      phone: '(325)-327-8559',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/49.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/49.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/49.jpg'
      }
    },
    {
      name: {
        title: 'monsieur',
        first: 'rémy',
        last: 'michel'
      },
      email: 'rémy.michel@example.com',
      phone: '(413)-690-2258',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/13.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/13.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/13.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'felix',
        last: 'pascual'
      },
      email: 'felix.pascual@example.com',
      phone: '989-013-525',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/68.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/68.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'giray',
        last: 'limoncuoğlu'
      },
      email: 'giray.limoncuoğlu@example.com',
      phone: '(890)-745-8079',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/97.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/97.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/97.jpg'
      }
    },
    {
      name: {
        title: 'miss',
        first: 'keira',
        last: 'taylor'
      },
      email: 'keira.taylor@example.com',
      phone: '(760)-025-2587',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/38.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/38.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'clyde',
        last: 'reyes'
      },
      email: 'clyde.reyes@example.com',
      phone: '06-9195-3888',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/29.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/29.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/29.jpg'
      }
    },
    {
      name: {
        title: 'mr',
        first: 'earl',
        last: 'wagner'
      },
      email: 'earl.wagner@example.com',
      phone: '(245)-200-8901',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/82.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/82.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/82.jpg'
      }
    },
    {
      name: {
        title: 'mrs',
        first: 'julia',
        last: 'perala'
      },
      email: 'julia.perala@example.com',
      phone: '07-446-919',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/60.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/60.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
      }
    }
  ];
  const mockedUsersList = {
    'results': userList,
    'info': {
      'seed': 'f73b87b7daf1b99e',
      'results': 20,
      'page': 1,
      'version': '1.1'
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserApiService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(UserApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get a user list from api', () => {
    service.obtainListUsers().subscribe(users => {
      expect(users.length).toEqual(20);
    });
    const req = httpMock.expectOne('https://randomuser.me/api/?inc=name,email,phone,picture&results=20');
    expect(req.request.method).toBe('GET');
    req.flush(mockedUsersList);
  });
});
