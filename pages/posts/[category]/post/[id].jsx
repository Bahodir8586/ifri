import Layout from '../../../../layout'
import PostCard from '../../../../components/PostCard'
import Link from 'next/link'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export async function getStaticProps(context) {
  //   {category:id, post:id}
  //   TODO: load the content of Post with this ID
  console.log(context.params)
  return { props: {} }
}

const post = {
  id: 3,
  title: 'Improve your customer experience',
  category: { name: 'Science', id: '1' },
  body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum illo accusamus tempore? Quibusdam, nisi! Ad cum libero mollitia deleniti explicabo maxime alias corporis, perferendis temporibus reiciendis distinctio ea recusandae eum nostrum repudiandae inventore quis, repellat ducimus deserunt et. Voluptatem obcaecati consectetur ipsam impedit dolore dolorum minus tenetur, deleniti, distinctio cupiditate repellendus, ipsum totam recusandae. Eveniet explicabo minima, non error harum vero mollitia possimus aliquid maiores rem voluptates porro repellat et debitis temporibus laudantium totam ipsa nisi, placeat cum? Sint facere numquam modi dolores nesciunt quidem at, illum expedita id hic excepturi tempora beatae sequi animi, necessitatibus in itaque, soluta voluptas ad quos labore fuga harum. Aliquam iste at autem quod veniam similique eaque mollitia quisquam et excepturi omnis eius facilis asperiores unde rem, cumque sed, quia dicta reprehenderit nam. Molestias sit nesciunt, debitis dolore perferendis laborum? Nam dolorem blanditiis unde reprehenderit consequuntur reiciendis, aliquid tenetur dolor natus tempore ea eaque, illum vel. Omnis ab quod, officia, fugiat maxime, deleniti nihil dolorem quos minima accusantium ratione saepe exercitationem porro corporis asperiores dignissimos? Et itaque cupiditate laborum expedita eum ab. Eius nisi animi, hic repellendus quos, ea vel culpa, ducimus in labore alias iusto commodi eveniet! Ea aperiam, exercitationem voluptates libero suscipit repellat fugiat animi laborum mollitia est consectetur excepturi necessitatibus quaerat voluptate. Quibusdam, totam. Obcaecati eaque optio quibusdam quasi quia repellat enim esse dignissimos beatae magnam! Veniam ea quidem harum! Consectetur reiciendis minima incidunt dolorem magni quam voluptates a, qui quibusdam dignissimos, asperiores nisi mollitia porro quia aspernatur illo reprehenderit accusantium modi voluptatem, placeat repellat ad! Quisquam, mollitia quia beatae aut quibusdam illo repudiandae. Recusandae dolorem dolorum aperiam reiciendis expedita laborum eveniet veritatis itaque similique dolore officiis eaque mollitia maiores, incidunt inventore officia, ullam aliquid est maxime impedit eligendi ea neque. Maxime quo numquam libero! Deleniti illum iure illo quasi facilis commodi? Nobis asperiores doloribus, aperiam ullam a suscipit architecto! Ab dignissimos repellendus consequuntur. Omnis vel fuga, ipsa possimus magnam atque voluptatum saepe libero. Voluptatibus, non sint. Quos laboriosam sapiente voluptatum error ullam exercitationem quaerat, maiores officia nam assumenda, pariatur iste. Id dolore impedit, minus, asperiores ipsa molestias fugiat voluptatum, ipsum distinctio repudiandae nemo possimus similique quia expedita nostrum modi et repellat mollitia! Ratione atque debitis assumenda sunt quisquam perspiciatis voluptatibus quia. Error explicabo quo atque pariatur! Cumque numquam dicta accusamus ut iure porro in officia quia possimus ab distinctio omnis, doloremque quis quae ducimus dolorum architecto nihil! Nesciunt architecto cumque soluta natus, nobis repudiandae, accusantium odit minus placeat consequatur cupiditate quam quae maxime earum commodi delectus ad vitae expedita, porro quod nulla! Omnis, distinctio. In sapiente, iusto eos mollitia perspiciatis itaque tempora eius! Natus perferendis, aspernatur nobis illum illo repellat autem, commodi praesentium rem sunt temporibus id omnis impedit minus eius nulla, recusandae molestiae deserunt inventore eum ex. Ipsa ex, sed ut, architecto similique mollitia temporibus autem porro nihil quae, consectetur iste voluptates quisquam fuga nam nesciunt enim obcaecati? Incidunt consectetur soluta illum quis cumque dolore sed porro accusantium dignissimos nesciunt ratione, sapiente nisi totam fuga delectus neque, blanditiis, molestiae earum saepe. Explicabo, corrupti, blanditiis laudantium eveniet non obcaecati illum dolore voluptatem eos maiores facilis omnis qui consequuntur rerum at? Ipsam dignissimos sunt maiores, cum consectetur harum consequatur similique error velit maxime, beatae aut obcaecati fugit esse nesciunt nulla inventore eum aperiam! Assumenda consectetur ipsam mollitia voluptatibus, neque recusandae reiciendis architecto cumque consequatur quidem quisquam reprehenderit magnam rem iure at ipsa distinctio nisi enim ratione voluptatem fugiat omnis! Similique incidunt laudantium sunt quasi nesciunt natus ducimus eius ipsam vero, amet blanditiis doloremque laboriosam pariatur reprehenderit obcaecati voluptates! Quis deleniti odio quia, consequatur quod ipsam, totam voluptatibus ab delectus ducimus animi vitae architecto possimus. Reprehenderit possimus eveniet at atque doloribus itaque accusantium quia autem vitae impedit. Perferendis ullam, iusto impedit totam, soluta corporis mollitia dicta rem id voluptates, et ratione repellendus enim eveniet neque laborum natus? Hic rerum cumque in mollitia quos eligendi sapiente perferendis dolor deserunt impedit doloribus assumenda tempora distinctio dolores quam corporis vitae et, aut culpa nihil, ipsam, quidem modi? Voluptatibus voluptatem reprehenderit veritatis ipsum! Quidem ab totam optio corporis eos voluptates iste fuga, corrupti vero delectus ducimus unde cum. Omnis reprehenderit harum dicta quasi nihil a voluptatem quaerat obcaecati ullam, facilis nam ut sed natus repellat eligendi dignissimos modi itaque ex eos quibusdam? Magni a esse illum quibusdam repellendus vero quos delectus ipsam ut maiores, nam, libero fuga necessitatibus molestias tempore! Possimus quia, sequi dolor eveniet cum est repellendus adipisci neque perferendis at laudantium quibusdam dolorum quos natus architecto fugit aliquid cupiditate ea illum quis aliquam dolores. Perferendis corrupti qui, aut voluptates neque ipsum ex quis, exercitationem impedit sunt cupiditate? Explicabo in obcaecati consectetur nobis deserunt ex neque! Sed illo laborum non animi accusantium. Perspiciatis esse molestiae quidem possimus consequatur deserunt totam provident enim, dolor in voluptatum. Id excepturi error neque eum odio. Voluptatibus, recusandae voluptates? Facere voluptas non accusamus dolorem, cupiditate commodi voluptatibus doloremque nulla hic quam delectus nemo ad vero dignissimos ex atque quisquam? Sit libero delectus harum aliquid ad, qui explicabo, corporis quisquam voluptas iusto eum non vero assumenda quos accusamus tempore nulla placeat neque deserunt officiis? Amet distinctio molestiae sequi recusandae necessitatibus nostrum deleniti aperiam pariatur, explicabo porro sit beatae nihil, quidem mollitia officiis enim praesentium labore ex fugit reprehenderit inventore doloremque ipsa. Beatae doloribus tempore dolorum iste. Commodi, ratione veniam voluptatibus est soluta vero ab aspernatur numquam dicta magni deleniti, culpa, tenetur ut placeat unde! Possimus eaque reprehenderit quas corporis rerum quasi laudantium quisquam nobis id nulla tenetur numquam ab quibusdam, esse quae facere. Fuga, error? Modi minus eius reiciendis! Quas ipsum commodi ad, laudantium maiores, eius eveniet rem corrupti autem sunt recusandae praesentium possimus tempore at neque eos voluptatum. Velit exercitationem, ipsa atque cumque iusto, delectus ullam vitae rerum saepe quisquam accusamus qui ea non nostrum dolorum dolor quibusdam quis? Nihil reiciendis ipsam possimus quidem nulla quas optio debitis aspernatur ratione! Dignissimos amet saepe laudantium dolores ex ut temporibus. Non repellendus nobis facilis officia. Nihil deserunt vero, accusamus eligendi impedit ea sit facere? Fugiat quae molestiae blanditiis, ad deserunt minus adipisci doloribus reiciendis possimus a accusamus modi non perspiciatis. Nisi quo ea expedita! Aperiam, harum odit. Adipisci alias dolore sequi unde nihil earum, optio quas delectus dicta, amet tempore, nam fuga numquam illum odio doloremque autem voluptatem incidunt similique exercitationem suscipit et voluptates? Repellendus perferendis maxime facilis deserunt! Ducimus accusantium eius deleniti ipsam harum enim aperiam non neque velit qui libero quisquam iure quos deserunt maxime vitae ex numquam repellendus, nam vero nisi beatae! Officia, qui aperiam ad doloremque harum veniam, voluptate, neque est quae at assumenda totam deserunt mollitia debitis! Delectus reprehenderit possimus modi! Itaque officia dicta, deleniti libero possimus tempora. Sit, nisi nulla. Eveniet eligendi cumque nisi ad laborum et, dolores eum deserunt quisquam dicta, voluptate eos minus ea molestias consectetur veritatis voluptatem perferendis. Delectus unde numquam maxime ratione! Dignissimos, laborum facere pariatur aut quasi laboriosam libero aspernatur perspiciatis doloribus, similique modi excepturi temporibus expedita. Quibusdam blanditiis voluptate quam expedita beatae harum illo ipsam? Atque porro minima pariatur, sequi placeat consequuntur quos repellat voluptate suscipit ipsum assumenda nulla ipsam repudiandae! Vitae, mollitia possimus? Ea esse repudiandae suscipit ad quaerat? Vel suscipit, dolore necessitatibus aspernatur porro eligendi. Recusandae culpa quae ipsa aut doloremque, animi similique ipsum deleniti accusamus illo earum quo doloribus quis assumenda. Repudiandae, ipsam unde? Quasi eveniet pariatur, vel dicta iste quae mollitia beatae ratione exercitationem laudantium libero sunt iure, veniam dolorem numquam provident. Magnam nobis pariatur at dolorum excepturi molestias praesentium atque eligendi consequuntur, enim deserunt doloribus sapiente ut, delectus quia fugit quaerat. Aliquam expedita nemo adipisci ratione animi cum aut quas eligendi eveniet laborum, itaque vero esse suscipit soluta blanditiis velit accusamus voluptate dolores cumque explicabo harum. Eveniet nemo aspernatur accusantium reprehenderit odit odio voluptatem, maiores illum atque consectetur perspiciatis doloremque, sit, magnam tempore ipsam quasi accusamus voluptas labore cupiditate dolor? Adipisci minima veniam explicabo asperiores aspernatur magnam perspiciatis error, perferendis nam doloremque dolorem repellat vero inventore placeat nemo harum minus illo porro accusamus voluptate voluptas ab. Molestiae ullam est maxime rem ipsa dolorum sit, sed corporis illo temporibus ut voluptate eaque odio ratione tenetur. Autem eum hic mollitia vitae nisi molestias reiciendis aliquid nihil similique eos! Iusto voluptate obcaecati amet quibusdam doloribus natus pariatur excepturi dolorum molestiae? Maiores voluptatibus eligendi et suscipit voluptatum adipisci, dicta eum animi excepturi. Officia quo rerum enim quas voluptas, consequatur cupiditate obcaecati iusto sequi nisi quasi laborum asperiores est modi atque iste voluptatum tenetur debitis aperiam reiciendis, voluptate excepturi eum labore hic. Odit, alias unde, fugit dicta pariatur impedit, numquam laboriosam sint dignissimos facilis architecto animi iure blanditiis? Ex corporis impedit vero inventore nostrum illo possimus necessitatibus aut labore repellendus quia dicta nesciunt velit deleniti harum libero quisquam laboriosam, minima, suscipit sit tempora! Aperiam ut unde ex eaque amet corporis eligendi dolores minus accusantium aliquam? Quia tempora quibusdam dolorem perferendis! Culpa dolores soluta nobis laudantium asperiores corrupti impedit alias dicta repellat adipisci. Nesciunt adipisci distinctio deleniti illo accusantium illum nihil beatae eius magnam libero eos quas harum quibusdam aperiam laudantium ullam deserunt repellat dolore facere architecto, earum incidunt aliquam. Eius, voluptas exercitationem quo ut cumque saepe esse impedit vitae iste veniam, unde iure ipsam sequi atque sint! Itaque, aliquam voluptatum? Ipsa laboriosam inventore, fuga corporis dolorum ea consectetur praesentium itaque fugiat natus dolorem totam reiciendis enim sed porro modi saepe labore, maiores alias harum. Asperiores, iste? Commodi, ratione eveniet rerum qui nulla voluptate laudantium vel blanditiis eos! Pariatur impedit, cupiditate, vero ea consectetur voluptates animi explicabo tempora esse velit ad facilis, quia molestias quod repellendus consequuntur maiores maxime rerum dolore quisquam dolor beatae. Esse unde similique autem ipsum beatae libero illo ut, velit animi, consequatur facilis eveniet iste hic sint? Debitis exercitationem voluptate vel sequi quibusdam. Nesciunt voluptatibus officiis quo nemo quis quas maxime quae animi, facere impedit autem quam eligendi nam qui laborum dolorum reprehenderit dolorem quos tempora eius, sapiente rem odio temporibus nulla! Veritatis, unde molestiae quisquam accusamus porro vitae soluta ex nam veniam odio obcaecati quos repudiandae maiores fugiat culpa quo adipisci dolores fuga ea corporis sint? Quibusdam doloremque commodi mollitia eaque maxime itaque numquam. Natus, perferendis fugit nam ad incidunt molestiae aspernatur sequi tempore esse magnam quos porro, soluta dolore atque nesciunt fugiat impedit reprehenderit ipsam expedita a repellat deleniti tempora. Enim harum earum et nemo rem voluptates incidunt pariatur, illum dolor modi at architecto non iste consequatur! Dolores sunt blanditiis animi, reprehenderit illo ducimus cumque, harum iure at commodi, sit ad ea! Ea vel illo ullam consectetur? Deserunt exercitationem rerum consequuntur beatae nam inventore cumque adipisci, vel ipsam sint quos molestias distinctio magni, odit voluptatum fugit expedita. Quasi repellat quibusdam deleniti dicta, corporis nemo aperiam obcaecati consequatur laborum quisquam illum atque cupiditate impedit eum iure odit totam mollitia, optio recusandae, corrupti inventore? Libero a laborum corrupti atque quidem, fugiat quas. Adipisci iste quod laudantium. Veritatis consectetur numquam quidem cum odio autem omnis suscipit, velit voluptatibus molestiae illum aspernatur adipisci nulla illo recusandae, nisi eum mollitia dolores rem tempore placeat! Aperiam minus quod laudantium ex ullam, numquam quisquam maxime accusantium tempora odio consequatur animi laboriosam? Quos nesciunt facere repudiandae sit nulla! Deleniti quos, earum voluptate eveniet, quaerat possimus excepturi, modi dolorum soluta rem nisi quibusdam alias doloribus! Architecto autem illum eligendi voluptatum odio voluptatem laborum culpa fuga totam. Veniam cum, praesentium adipisci placeat quas architecto, recusandae sint facere vel consequatur atque doloribus esse numquam excepturi aliquid, temporibus molestias facilis dignissimos qui quo natus corporis eos commodi? Qui quasi dolore laudantium eligendi quam expedita quia amet! Minima, quidem earum voluptatem natus consectetur amet consequuntur eveniet inventore veritatis reiciendis debitis distinctio, nobis nam expedita beatae blanditiis sint impedit cupiditate perspiciatis voluptatibus corporis placeat repudiandae minus vitae. Possimus exercitationem nulla numquam nostrum illum odio velit asperiores, cumque dolor in corporis officiis laudantium autem quisquam officia modi harum, quas voluptatibus sapiente, quod nobis? Voluptate, explicabo porro fuga omnis odio quisquam veritatis natus nemo tenetur voluptatem quidem culpa facere, quis deserunt temporibus alias officiis adipisci repellat hic perspiciatis! Rem fugiat quam impedit aspernatur? Vitae corporis numquam, eaque quod incidunt ducimus! Perspiciatis eum quo illo rem adipisci maiores exercitationem autem nihil minima!',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  date: 'Feb 12, 2020',
  datetime: '2020-02-12',
  imageUrl:
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  author: 'Daniela Metz',
}
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    category: { name: 'Science', id: '1' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    author: 'Roel Aufderehar',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    category: { name: 'Science', id: '1' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    author: 'Brenna Goyette',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    category: { name: 'Science', id: '1' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    author: 'Daniela Metz',
  },
]

const Post = ({ ...props }) => {
  return (
    <Layout>
      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-5xl md:p-8 mx-auto shadow-md">
          <h1 className="capitalize text-3xl text-center mb-6 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-80 object-cover mb-4"
          />
          <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <Link href={`/posts/${post.category.id}/1`} passHref={true}>
                <a className="text-indigo-500 hover:text-indigo-700 hover:underline text-xl lowercase">
                  #{post.category.name}
                </a>
              </Link>
            </div>
            <div className="flex-shrink-0">
              <span className="sr-only">{post.author}</span>
            </div>
            <div className="ml-3 flex flex-col items-end w-full text-right">
              <p className="text-xl font-semibold text-gray-900">
                {post.author}
              </p>
              <div className="flex text-base space-x-1 text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mt-12 mx-auto">
          <h3 className="capitalize text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Related Posts
          </h3>
          <div className="mt-4 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Post
