import React from 'react';
import { ReactComponent as Home } from '../assets/homeIcon.svg';
import { ReactComponent as Music } from '../assets/musicIcon.svg';
import PostDetailPage from './PostDetailPage';
import { useRecoilState } from 'recoil';
import { isDetailPostOpenState } from '../store/isDetailPostOpenState';
import { ChildrenProps } from '../type/type';
import Subtitle from './Subtitle';
import { useNavigate } from 'react-router-dom';
import PostItem from '../components/post/PostItem';

const MainPageBox = ({ children }: ChildrenProps) => {
  const [isDetailPostOpen, setIsDetailPostOpen] = useRecoilState(
    isDetailPostOpenState,
  );

  const handleCloseDetailPost = () => {
    setIsDetailPostOpen(!isDetailPostOpen);
  };

  const dummyData = [
    {
      id: 1,
      postImg: '/images/sample/soondoo.jpeg',
      postArtist: '정우',
      postSong: '뭐든 될 수 있을 거야',
      postDate: new Date().getDate(),
      postWriterImg:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgSEhIYGBgYERgYGBgZGBgRGBgYGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKoBKQMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAAAQUCAwQGBwj/xABAEAACAQIEAwUFBwIEBQUAAAABAgADEQQSITEFQVEGImFxgRMykaGxBxRCUsHR8HKCc6Ky4SNiksLxJDM0Q1P/xAAYAQADAQEAAAAAAAAAAAAAAAAAAgMBBP/EACIRAQEBAQADAAICAwEAAAAAAAABAhEDITESQQRRMmGRIv/aAAwDAQACEQMRAD8A6lC8cWUdB8I7DhADwjmAQhAQCoQgI4AQhCAEIQgBMfH4taSNUbZRoNrnkJkTVO1uLuy0fwqVLW5s2tvRR/nmavI3GfyvGkdoHqVKoeoSSxLnppoijwFx8JDVUyrYb7+uwmx8SANRuiog8hy/WQgo5gD1qW/6Rf8A7pHro5xh8T4dmSjS5ZVPnoD+s2zgHZ+miAlRe0sJQDPT00FJPkizbcJT0EbLLGKeGo2hEa8Hp7ZR8JLqkeWMyxq/EOBU7GyjroOc0PjfAShumg3O/wANBOtYszX+I0Aw2m9LcxyrDdxrMo0Olrk/HN8rTYsBW0BBI8dSVPRgd+vLTQXkf2owAU3tuf30+ki8BimpsAGvrp111GnQ6abesyzrJeO19iuJf/Qx0PeTmLn3gvhz+M3NTOOcF4jYq9M7PcDezbkHqpH6GdawOIDorrswBHhfl8bzc3vou889skwEBAx0wYQhAAymMwAgBaUmVGIQBQhCAEIQgBCEJhjhFHACEI4AxHEI4AQhCAEIRXgA7AAk7AXPkN5zfiuKLvm5u9/VyAvwAUes3bjdXLTK8309Of7es0VKDVazuPcpFXdt/dvkUeJYbf8AK3SS3f0r45ydYPED75H5/kg0HxaR1F8tBHOhZ6hHj76g+uUH4SQ402Wjp7zNp5ub/IFfhI7H4fvYWiNhTYn+2wH+qJFr7bBgAM4BIuEVfgJtmGp6TRMPhC7mpc2zEC1+RsJtnC2qL3WYkW5xs1molcsZWBewmNicaQO6LxulW8SJF4hLy3iOI1yTlp38LEfOYFTijg2qUyviLtNZUT2hwIdT5TnWIsDY7j0nVsS6uhKkEGct47TK1Gvobx81PUSvZrH94qTp3d/EgD4Xb1M7R2LxuZGpnddR5Xsfn9Z52w2IKkEb5vpYj5/Sdd7EcWHtqfe94ZT4hrAfPWJfWm/cupwheEoiIGEUAI4QMApMIQmVsKEIQgoijimsOEITDCOEIARxRwBiOIRwAhCEAJUn6SmJ7hSR5RdXkbmdvGiDE1nxNSkO8FchFOgu+up5KMhPhdjM7iWDWhQXC07sztnqMAbsSLMxHIb26WA33kOEYP2BqVqxAqVXJsNcqDRV8SbZifEDlcxvFePU3DInuKbuw/EV1t4m5+Uh13bn5a7meo1niKB6qUxsgLH0/wDJkVjMWPvJAF8qZQf6bXA/u/SZ+FxAC1MQb7EDTpc2Hjy9JhcLwPtGBYXubseut7A9NfpM6WRc4T2kpqwoZGLZrZgA1ybEnum4He3tbx3tu+Aqh8pU3B1B8JHYPs7RU+0WkisTcsB3iTuSeu82PhHClUAKoVQSbeJNz85T5CWljVsvpMXAUg+rdZm8bYKMsgmol0NPO6BiMxQ5WIGuW/IHwmyei99pqtiKKC2YA28un7iQuMrI/QiRHaHsp94b2lOslMBVAT2dgMtyCLG97sxvuczXNjaYlHh9ai9kYFLAZSzMRYbgne8J6bV+rgwhLJpfccpz3tjQs+f0nS3uROf9ultk8SY+fqevjTQZtPZ3iOQo/wCU2PkdD8pqsysHXym3KGvZcXlepuH4oVERwb5kDA9Qf2Oh8fOZSPf0mgfZp2gp1MP7Co4V6R7tzYsh/L1sb3HjN3w7EsT1PS2gGhI5X/aNPcJqcrJMLQhNKIjGZTCNohAxwCmEIQYIo4QAhCEwxwijgBHFHAGI4hHACEIQAmLjuILTXXfkJlqJB8T4OlQsajN3hbu6ZR1B6yXkt+OjwZzb3TQ+23HKrrlRiqu1gQbF7Gxtb8IPP/ea9h8VmTKCbKlydFAGlze+pN78veHSdMx+CwAvUqU1cqAFLksBrlAC+6N+k0LjeEwdO9QVmVC6saYPtMxU3VVue6L39bSUjr3r8p6nJBQRqipQX8RDNl3APugX5nS3x5ToPCeBCmozb2Gm4A6ePnIf7PESsDiMlsrsqje3+9uc3p15wiOvXpi08OBJFEsLDpMWiCTfkJaetiPaHuIKQQ94sc5flYDTLa++v6taTnfiL48+swMM2kxuN8RcOAabsCQCwsAoPMX96VYOpe9tr6SmaXWbEshBEsYuktthKEa0or1JoRmJ0nPu2VPO6DwY/Sb/AI06GalUoh8RmOyC3gb7zOt/HrQsZgsoLC9gQDfx22mCDNn7YU1Qqq/iJY/2iwt/1NNcpJf0j5nUdeq2Lsdxz7tiFdiwUnKxQlWUH8QtvboQbz0NwvF0qiCpTqBwwBzZg2/kNJ5aVLaTovYXiNTIKa5zZiD7NkU337yNrt+XQ8xe8bnC327fCUUGuqnqo3325+MrMCEYARRwBGMwERgYoQhAoheEVoA4RRzDHCKOAEIQgFSxxLHACEIQADAanYC8i+P1sq2Xci3xkqqg7i4+Mg+0WHVhqN7g7895HyOj+Pz8p1xTtjxOszGn7VjTzGy6C+UixJAuwvqLnpNcp1yzqrMT3lUFiWtcgTYu2uECVF6C46bnY+gmtVaLpaqqnIKgs1jlzDvBSdr2HyMzHLlXzas1a9DdheGihhkQXubsxO5Zjc3mxst5FdnsSr0kdNmQMPIi4krVvay720iQtvauKABMPGYqmBYt+3xkPi8Bjb64hGT8pplSP7s9j6iRXEMMoW1R629wV9n08vPrGX8Phzq+7/xm8S4hQfKFdSf5tMZGAmncUFJWtTZ2CrpdVU388258pm8F4pnb2WVzYXzFCFFuRb6Rs39Lfyv4k8efyzbz/c422owtcTDqNBSbWlFSb3jhRnEalhIX7sQQSRbMBpuevzvKe03HFw707rmu9yvPKNyPG9prvGu1aOpGGV1Zty+UZQSxOQAnXvb+F/LJLWXUiP7RYhamKyg3VRk0255iPEXt5rIOmcreRsf1jwrWZT0dT85cxdLKxANxmYX62Y6+GlpfPxz29XMQBvN4+y+sDifZm3/Ep5T1zIQysPG2bzHWaArXW3SSfZ7iLYevTqg2yOrHyB1+VxNvxk+vT1IWGXoNPL+fWVMZj4PFpVRKqe6y3HhfQj4/SX4sZQIzAQMKIIjHKWMIwQgITQIo4oAoxFCBlUcpjgDhFHMCoRxAxwAhCEAamRXGgSslVmFxZe4fKS39X8N45V2m4T7cspNjcWPTx+RmqcQpYlMOMLUoAojFsyEksWsc1tdgoHL3Z0rHU+/fqP0P7zD4xRul7fhttflf6XiY+LeT6sfZBx8PTbCu3ep6oDuUP7HT1E6rTnlbh3EKuGrLXotZka4O4I5gjmCJ6D7GdrKGOpZlOWooHtKZPeU9R+ZTyb6GbrPL1KXs42iouk17inDQ51G17bibCzi0j8RUEVTx71i9l5Wk4ns5TBuxY/3GXcPhkQWRQPKS2OqXMwcspOQ3k8/k8nrVtF5brGwl60i+I1CQVG1tTJ3RJlyrtljPaYluigIPTU/WQMv42rmqO/V2PxJliXzHNq9oBmfXqAqhGwZhrYmxs1z6s0wSJdU931v8jHKvCmAfCOvTsARKcPUF8p25ftL7uCtuc21kjsX2Sca9rhjQZgWpm1r65TfKfPQjyUToqzzn9n3E2w+MSxsHJRr6XuLgepA9bT0VTa4B6iLBqe1yKOE1pGUxmKBRCEIAoQhAFCKOBjhFHAHGIoQCtYWiEcwCAhKkW5tAKkU7zC4qe4ZKsLCwkTxTVTJavtXxtQxy6X6GWcTTzIR4TMrLcES0q3W3pJy806NTuZXC8Uljbpv5jSZfZvG1KdW9JyjkXVlNiGXW3iCMwtzlriotUcdKjj4O36WmBg6uR1bowJ8r6/KV+xC38dR27s723q1j7KvTUOAO+pIDeanY+R+E2BscTuJzfALkrI42ZbX8tpv1CzAGQ12fF/VXGYGU6Sv2cRWLbaPSzUF5FcRWyOR+U/SS7SO4ovcb+kzZB1w3F0CjFT/Ly1ablxrg2c3XcDQzUMRh3Q5XBBnVjUsc282VRKkMolSx01ZW20qD8/jKlFxLbIRrCzrZeMzBXzq6mxDA9dQbg+IvPS/BK2ekjdaanrbQH6ETzDgqhVlYfmA6b+M9J9lqoNFV5qiD/IBy8AJkbfadiMcpM0pQhHCshQjigwGKMwgFuOUgxwCqEQjgYxHKY7wCoRykQvAHeXcMe96SwZg43iiUO+2tt+QF+V+vhFvwSdvpNvU1t4X/AJ8ZGcRGhlvgr1nz1qylC7AIhsCqL1XcEkm99dBoJTxOtYGR1V8TiAqra8iON8Vp4Wi1R9Tsi82c7KP1MlqhJnKftA4qKlUIpBWnmQc+/fvk+oA/tvzk5O6Wt5lquJrFizMdSST/AFMbmYcqaKdMjl1e10Pglb2mHpvzRgp817v0sZvvDH7onMuxT3pVU6OGHnb/AGE6JwqrdR5SW4ti9iaU3gwlFNpfURJkyz7OYXEKd1IkuVmHiEvpCiNabB67SM4hwFKoOZfAfvNxp4S59f59Jkvw8W2my8F9uG8a7O1KF2AJT5jz8JDILzvGL4cNbiafxHsGKzZsOQjX71x3PM22Plv0ls676R1nntz9EPkfrKmHUSU4hwjEYdjTrUyp2DDVG8Vbn5HWYLp1Hx0jyls77inDaZFA2rK3Q8ha/TSej+CqPZoyfkXz8tdRruJ5zCeH6ztvYvjAqUaZA19mqta5BZLqdOvd+Yh+xZ6bsrXAPIgH4wlnDOCosevprtL02J0RxCODRaBheK8CiEUIBZUysS1KwYBVHFCAVQijgZVETCIwC1XewPhz/nKQeEHtXVwL97uae6Dp7S3523HRehJmVxxyEyL+Ia36XG/mzKPjMzhGGAy2Fgqg+LEiwJ/mlpPV98/pTM5nv9pJyFGVdABYSC4o/KTWIM13HvdrSSuZ6RXFMUKVKpVOyIzeeVSQJwXFYguxYzrH2kYv2eDZAdalRU9Ac59O5b1nH2M3xz9s3rnojFHKgNJbiP1tfYdtanhkPxzA/ITfeFNluvQ/LlOd9jT/AMVl/NSPxBU3+F50LDOO62xK6+Y3k9z2ti+k/ReZdN5E0XmfSeTOzs0sstzGGldJMx8ItavYZOfwmd7MWlFJLTPwtG+p2HzmydpbeRgJwvPq2g6cz+wmU+DTLlVQLDQDl5SSCxNTl8/+UNW6+tU4hw1HFnUEEWIIBB9DOe9pOxZF6mG33yHYjorcvI6eU7JiMNmGm8wE4SX985R03J/aU7L9TnZ8ebGUglWUgg2KkZSCORE2Lsvxh6DZVOZGYHKTlsRY907gzrnFOwHD8S2eoj5gLZ1fIT52Fj6ialxv7K0UE4PFEt+StYg+AdRp6qYtn9KTU/bbuA8XSqtx15ix15MPwtcEW+En0N5xnAVMbgKo+8UnF+7qbrUXayVASpYAaD0Omk6dwjiSui1Fa6NqGta3IhwPdIItf06X2Uup/SbiiUxzWCKEIFEIQgGPKlMpjE0KxCIGMTAccpjgFQjMpEGgEPxIXJPjTPXQO5/QGTXD6ZC97lYDXkP4JD44d4A376AeqG1h4nP8pPU1KqATew7x6m2pHreR19XnyMPiLOASq3sNr2vNazuxJbTp3cvyuZPcQxSgatlJGx0Mg/aA3N7/ADk/0tHM/tRxHfpUsxNkZzf/AJiFXy91pz2bd9omID4o2I7tNVIsQRuQDfqCGH9U1ISuPUiO/egBL6Lp6/pLdtJUraW8ZTpZGxdibfeNf/xc/DLOlYKgArb3zHc305W6aTmXY233lVOzI4I63G3ynT8LTFmvqcxN7czqYmvpsfFaLM6hrtMWlTF9hJPAoLxLFOr9GjfeZ1NQOUdJBMpABtEv+jHhqDMegG/7SXRQNBLVJMoA+MvrKZzyIa12hRGY5j4qpYWG5jFHtgLm8w8Tir+7LbTHcxpGUmqMeZlnMby5ljCR5C2nUpq6FHVWUixVgGVh0IOhmmYui2AqCphz/wCnqPZ6TXdUc6dzmLi9h4EG9lE3tU0kHxfArXp1KDbOpAP5W3Rh4qwU+kLOiXjP4ZjlcC2ml7XzWB5qfxL48tiAdJJKZzfsRxb2tK1Rsr02yvbUo4uvtLcwdmGx0PWb/g8TmFmFmBsw3F+oPMEWI8DMbYyoRxQKIQhAMeCmAiE0HK1MpMqWYDhAwgFUIQgFmjQDVAT+DvDzJYD9PhJFzMfCbv6frLtWR19Xwh+KtcSHC6SU4lI2TvxaOD9p62fFYh+uIceisQPkBIlZlcR99/8AFb6mYglp8Q1/kujaUbGVLy84V9/SbR30muyrgYmmerEfFTOsUzace4D/AO/T/wARfqJ18Q03LLpyQwYkbRkrhImvikZ6vaSHDKRY522G3ievpI5ZsGE9xf6R9Imfo38XOcuiWll4SqCio+UXkdUfmZl4vlMCtvALTtBKZMBuJnJtKfon1ZShLdVQNZnrI3HTZWX0VXEAL6SML6x1JYG81jlWBxv3TilZfwPiXRwbZcrsSht0F7E+N513AtZsvMJpfcqCSAfEd4HyWcI7a/8Az8T/AIg/0LO34E3+7k7mnqevcESn/TYla8ct05cmlEIQgH//2Q==',
      postWritId: '나는 전지현이 될테야',
      postTitle: '용기가 필요할 땐 이 노래를 들어..',
      postContent:
        '돈벌고 싶다 돈벌고 싶어 돈돈돈돈 돈돈돈 여행가고싶다. 나는 주말에 놀테야~돈벌고 싶다 돈벌고 싶어 돈돈돈돈 돈돈돈 여행가고싶다. 나는 주말에 놀테야~돈벌고 싶다 돈벌고 싶어 돈돈돈돈 돈돈돈 여행가고싶다. 나는 주말에 놀테야~돈벌고 싶다 돈벌고 싶어 돈돈돈돈 돈돈돈 여행가고싶다. 나는 주말에 놀테야~',
      postTag: ['힐링', '전지현', '돈'],
    },
  ];

  return (
    <div className="flex">
      <div className="flex w-1/6 flex-col items-center justify-start bg-transparent px-10">
        <div className="mt-5 flex h-[4.3125rem] w-[4.3125rem] cursor-pointer items-center justify-center rounded-full bg-purple shadow-light">
          <Home width={40} height={40} />
        </div>
        <div className="my-5 flex h-[4.3125rem] w-[4.3125rem] cursor-pointer items-center justify-center rounded-full bg-white shadow-light">
          <Music width={40} height={40} />
        </div>
      </div>
      <div className="flex h-screen w-[59.125rem] flex-wrap overflow-y-auto rounded-[2.5rem] bg-white px-[1.8125rem] py-[2.625rem] scrollbar-hide">
        {children}
      </div>
      {isDetailPostOpen && (
        <div>
          <PostDetailPage onClose={handleCloseDetailPost}>
            <Subtitle
              leftText={
                <span className="flex items-center">
                  <img
                    onClick={handleCloseDetailPost}
                    className="flex w-[1.1em] cursor-pointer"
                    src="/images/sample/arrow-left.svg"
                  />
                  feed
                </span>
              }
              rightText={'수정'}
              onClick={() => {
                alert('dkd');
              }}
              isLoggin={true}
            />
            <div>
              <section>
                {dummyData.map((post) => (
                  <PostItem key={post.id} {...post} />
                ))}
              </section>
            </div>
          </PostDetailPage>
        </div>
      )}
    </div>
  );
};
export default MainPageBox;
