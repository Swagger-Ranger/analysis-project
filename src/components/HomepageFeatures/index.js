import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '理解问题',
      Svg: require('@site/static/img/jaeger.svg').default,
    description: (
      <>
          all for analysis章节是关于如何理解一个质检系统，以及整个的设计是什么样的.
      </>
    ),
  },
  {
    title: '找到工具',
      Svg: require('@site/static/img/xcode.svg').default,
    description: (
      <>
          middleware章节就是需要的工具和核心组件：搜索引擎、关系数据库、图数据库、时序数据库等
        {/*ahead and move your docs into the <code>docs</code> directory.*/}
      </>
    ),
  },
  {
    title: 'Dev and Ops it',
      Svg: require('@site/static/img/coffeescript-color.svg').default,
    description: (
      <>
          Dev and Ops it即实现并维护它，对应code和devops章节，即实际的编码需要的知识(这里就是Java)，和项目实际运行和维护的知识，最后blog章节就单纯是个人一些感受
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        {/*  <img src={image} className={styles.featureImg} alt={title} />  */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
