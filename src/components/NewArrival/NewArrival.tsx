/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import cloth_1 from '../../assets/cloth-1.jpg'

function NewArrival() {

  return (
    <Box sx={{
      marginBottom: ['0', '0', '0', '20px'],
      display: ['block', 'flex'],
      flexWrap: ['nowrap', 'wrap'],
      justifyContent: ['flex-start', 'center'],
      gap: ['0', '20px'],
    }}>
      <div sx={{
        width: '340px',
        padding: 2, '@media screen and (max-width: 425px)': {
          width: '100%', border: '2px solid red'
        },
      }}>
        <h3 sx={{
          borderBottom: '1px solid #ddd', paddingBottom: 3
        }}>Latest Arrivals
        </h3>
        <div sx={{
          display: 'flex', gap: 3, overflowX: 'auto', marginTop: 4, scrollSnapType: 'x'
        }}>
          <div sx={{
            display: 'flex', flexDirection: 'column', gap: 3, scrollSnapAlign: 'start'
          }}>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px',
              '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px',
              '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px',
              '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px',
              '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>



          </div>

          <div sx={{
            display: 'flex', flexDirection: 'column', gap: 3, scrollSnapAlign: 'start'
          }}>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px',
              '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px', '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px',
              '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{
              border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px',
              '@media screen and (max-width: 425px)': {
                width: '95%', border: '2px solid blue'
              },
            }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>


      <div sx={{ width: '340px', padding: 2, }}>
        <h3 sx={{
          borderBottom: '1px solid #ddd', paddingBottom: 3
        }}>Trending
        </h3>
        <div sx={{
          display: 'flex', gap: 3, overflowX: 'auto', marginTop: 4, scrollSnapType: 'x'
        }}>
          <div sx={{
            display: 'flex', flexDirection: 'column', gap: 3, scrollSnapAlign: 'start'
          }}>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>



          </div>

          <div sx={{
            display: 'flex', flexDirection: 'column', gap: 3, scrollSnapAlign: 'start'
          }}>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>


      <div sx={{ width: '340px', padding: 2, }}>
        <h3 sx={{
          borderBottom: '1px solid #ddd', paddingBottom: 3
        }}>Top Rated
        </h3>
        <div sx={{
          display: 'flex', gap: 3, overflowX: 'auto', marginTop: 4, scrollSnapType: 'x'
        }}>
          <div sx={{
            display: 'flex', flexDirection: 'column', gap: 3, scrollSnapAlign: 'start'
          }}>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>



          </div>

          <div sx={{
            display: 'flex', flexDirection: 'column', gap: 3, scrollSnapAlign: 'start'
          }}>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>

            <div sx={{ border: '1px solid #ddd', display: 'flex', justifyContent: 'center', gap: 3, alignContent: 'center', borderRadius: '10px', height: '100px', width: '320px' }} >

              <div sx={{
                width: '20%', paddingTop: 3
              }}>
                <img src={cloth_1} alt="cloth" sx={{ width: '100%' }} />
              </div>
              <div sx={{ padding: 0 }}>
                <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                  <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>French Toast Girls Sho ...</span>
                  <span>Clothes</span>
                </div>
                <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
                  <span sx={{ color: 'secondary', fontWeight: 800 }}>$9.00</span>
                  <span sx={{ fontWeight: 300, textDecoration: 'line-through', color: 'gray' }}>$4.00</span>
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>

    </Box>
  )
}

export default NewArrival